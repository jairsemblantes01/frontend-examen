<template>
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div style="min-height: 85vh" class="mx-auto max-w-7xl">
      <nav
        class="relative z-50 h-24 select-none"
      >
        <div
          class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2"
        >
          <div class="flex items-center justify-start w-1/4 h-full pr-4">
            <a href="#_" class="inline-block py-4 md:py-0">
                <span class="p-1 text-xl font-black leading-none text-gray-900"
                ><span>ECGplus</span
                ><span class="text-indigo-600">.</span></span
                >
            </a>
          </div>
          <div
            class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex"
          >
            <div
              class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row"
            >
              <a
                href="#_"
                class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
              >tails<span class="text-indigo-600">.</span></a
              >
              <div
                class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center"
              >
                <a
                  href="#_"
                  class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                ></a
                >
                <a
                  href="#_"
                  class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                ></a
                >
                <a
                  href="#_"
                  class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                ></a
                >
                <a
                  href="#_"
                  class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                ></a
                >

              </div>
              <div
                class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0"
              >
                <img src="https://aka-cdn.uce.edu.ec/ares/tmp/SIIU/anuncios/sello_400.png" width="80px">
              </div>
            </div>
          </div>
          <div
            class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              x-cloak=""
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              x-cloak=""
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
      </nav>

      <!-- Main Hero Content -->
      <div
        v-if="!ecgData.b64"
        class="container max-w-lg px-4 pt-32 mx-auto text-left md:max-w-none md:text-center"
      >
        <h1
          class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"
        >
          <span class="inline md:block">Empieza a analizar tu Corazón</span>
          <span
            class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"
          >Tu salud importa</span
          >
        </h1>
        <div
          class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg"
        >
          Se requiere un registro ECG de la persona que va a realizar el análisis.
        </div>
        <div class="flex flex-col items-center mt-12 text-center" v-if="!inicio">
            <span class="relative inline-flex w-full md:w-auto">
              <a
                @click="inicio = true"
                class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Iniciar ahora
              </a>
              <span
                class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full"
              >gratis</span
              >
            </span>
        </div>
      </div>
      <!-- End Main Hero Content -->
      <div v-if="inicio && !ecgData.b64">
        <a-alert
        style="margin-bottom: 40px"
        class="my-5"
        message="Error"
        description="El archivo ingresado no contiene el formato correcto (.mat)"
        type="error"
        show-icon
        v-if="showError"
      />
        <div class="flex justify-center items-center w-full my-10" @click="openFile">
        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click para cargar tu registro </span> ECG</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SOLO ARCHIVOS .MAT (MAX. 10MB)</p>
          </div>
        </label>
      </div>
        <div class="flex flex-col items-center mt-12 text-center" v-if="fileList.length > 0 && !isLoading" @click="postEcg">
            <span class="relative inline-flex w-full md:w-auto">
              <a
                @click="inicio = true"
                class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Empezar análisis
              </a>
            </span>
        </div>
      </div>
      <div v-if="ecgData.b64">
        <h1
          class="font-extrabold text-3xl mt-10 leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none"
        >
          <span class="inline md:block">Grafico del ritmo cardiaco</span>
        </h1>
        <center>
          <img :src="'data:image/jpeg;base64,'+ ecgData.b64">
        </center>
        <div v-if="ecgData.info">
          <div class="flex flex-col items-center mt-12 text-center md:w-auto">
            <a-alert v-if="ecgData.info.bpm > 100 || ecgData.info.bpm < 60"  message="Su frecuencia cardiaca se encuentra fuera de los rangos normales" type="error" show-icon />
            <a-alert v-else message="Frecuencia cardiaca normal en reposo 60-90 latidos por minuto" type="info" show-icon />
        </div>
            <div class="mx-auto container mt-10 flex justify-center items-center">
              <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
                <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 class="lg:text-4xl md:text-4xl text-xl font-extrabold leading-10 text-center text-gray-800">{{ecgData.info.bpm.toFixed(2) +'ppm'}}</h2>
                  <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Frecuencia cardiaca</p>
                </div>
                <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 class="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">{{ecgData.info.breathingrate.toFixed(2)}}</h2>
                  <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Frecuencia respiratoria basada en Ecg</p>
                </div>
                <div class="flex justify-center flex-col items-center w-66 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 class="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">{{ecgData.info.ibi.toFixed()+' ms'}}</h2>
                  <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Intervalo entre laditos</p>
                </div>
              </div>
            </div>

          </div>
        <div class="flex flex-col items-center mt-12 text-center" v-if="fileList.length > 0 && !isLoading">
            <span class="relative inline-flex w-full md:w-auto">
              <a
                @click="() => {
                  inicio = true
                  ecgData = {}
                  fileList = []
                }"
                class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Nuevo analisis
              </a>
            </span>
        </div>
      </div>

      <div class="px-4 py-12 bg-white" v-if="isLoading">
        <div class="mx-auto flex justify-center">
          <div class="relative">
            <div
              class="w-[160px] h-[160px] border border-indigo-400 rounded-full"
            ></div>
            <div
              class="w-[140px] h-[140px] border border-indigo-400 rounded-full absolute top-2.5 right-2.5"
            ></div>
            <div>
              <svg
                class="absolute top-[22px] right-[26px] animate-spin"
                width="113"
                height="113"
                viewBox="0 0 113 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.7631 110.374C46.061 110.374 35.5993 107.2 26.7008 101.255C17.8023 95.3088 10.8668 86.8579 6.77128 76.9704C2.67576 67.083 1.60419 56.2031 3.69207 45.7066C5.77994 35.2102 10.9335 25.5686 18.501 18.001C26.0686 10.4335 35.7102 5.27994 46.2066 3.19207C56.7031 1.10419 67.583 2.17576 77.4704 6.27128C87.3579 10.3668 95.8088 17.3023 101.755 26.2008C107.7 35.0993 110.874 45.561 110.874 56.2631"
                  stroke="#4338CA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray="16 16"
                />
              </svg>
            </div>
          </div>
        </div>
        <p class="text-center text-gray-600 text-base mt-4">
          Procesando información del archivo ingresado...
        </p>
      </div>
    </div>

    <div class="overflow-y-hidden">
    <div class="mx-auto container">
      <div class="flex flex-col items-center justify-center">
        <div class="flex items-center gap-x-8 mt-6">
          <button  aria-label="facebook" class="focus:ring-2 focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full">
            <svg class="fill-current text-gray-800 hover:text-gray-500" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 11.0631C21.5 5.26467 16.7984 0.56311 11 0.56311C5.20156 0.56311 0.5 5.26467 0.5 11.0631C0.5 16.3037 4.33906 20.6476 9.35938 21.4361V14.0992H6.69266V11.0631H9.35938V8.74983C9.35938 6.11873 10.9273 4.6642 13.3255 4.6642C14.4744 4.6642 15.6763 4.86952 15.6763 4.86952V7.45373H14.3516C13.048 7.45373 12.6402 8.2628 12.6402 9.09436V11.0631H15.552L15.087 14.0992H12.6406V21.437C17.6609 20.649 21.5 16.3051 21.5 11.0631Z" fill="currentColor" />
            </svg>
          </button>
          <button aria-label="instagram"  class="focus:ring-2 focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full">
            <svg class="fill-current text-gray-800 hover:text-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2969 12C14.2969 13.2686 13.2686 14.2969 12 14.2969C10.7314 14.2969 9.70312 13.2686 9.70312 12C9.70312 10.7314 10.7314 9.70312 12 9.70312C13.2686 9.70312 14.2969 10.7314 14.2969 12Z" fill="currentColor" />
              <path
                d="M17.3716 7.93616C17.2612 7.63696 17.085 7.36615 16.8561 7.14386C16.6339 6.91498 16.3632 6.73883 16.0638 6.62842C15.821 6.53412 15.4563 6.42188 14.7845 6.3913C14.0577 6.35815 13.8398 6.35101 12 6.35101C10.16 6.35101 9.94208 6.35797 9.21552 6.39111C8.5437 6.42188 8.17877 6.53412 7.93616 6.62842C7.63678 6.73883 7.36597 6.91498 7.14386 7.14386C6.91498 7.36615 6.73883 7.63678 6.62823 7.93616C6.53394 8.17896 6.42169 8.54388 6.39111 9.2157C6.35797 9.94226 6.35083 10.1602 6.35083 12.0002C6.35083 13.84 6.35797 14.0579 6.39111 14.7847C6.42169 15.4565 6.53394 15.8212 6.62823 16.064C6.73883 16.3634 6.91479 16.634 7.14368 16.8563C7.36597 17.0852 7.6366 17.2614 7.93597 17.3718C8.17877 17.4662 8.5437 17.5785 9.21552 17.6091C9.94208 17.6422 10.1598 17.6492 11.9998 17.6492C13.84 17.6492 14.0579 17.6422 14.7843 17.6091C15.4561 17.5785 15.821 17.4662 16.0638 17.3718C16.6648 17.14 17.1398 16.665 17.3716 16.064C17.4659 15.8212 17.5781 15.4565 17.6089 14.7847C17.642 14.0579 17.649 13.84 17.649 12.0002C17.649 10.1602 17.642 9.94226 17.6089 9.2157C17.5783 8.54388 17.4661 8.17896 17.3716 7.93616ZM12 15.5383C10.0457 15.5383 8.46149 13.9543 8.46149 12C8.46149 10.0457 10.0457 8.46167 12 8.46167C13.9541 8.46167 15.5383 10.0457 15.5383 12C15.5383 13.9543 13.9541 15.5383 12 15.5383ZM15.6782 9.14868C15.2216 9.14868 14.8513 8.77844 14.8513 8.32178C14.8513 7.86511 15.2216 7.49487 15.6782 7.49487C16.1349 7.49487 16.5051 7.86511 16.5051 8.32178C16.5049 8.77844 16.1349 9.14868 15.6782 9.14868Z"
                fill="currentColor"
              />
              <path
                d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM18.8491 14.8409C18.8157 15.5744 18.6991 16.0752 18.5288 16.5135C18.1708 17.4391 17.4391 18.1708 16.5135 18.5288C16.0754 18.6991 15.5744 18.8156 14.8411 18.8491C14.1063 18.8826 13.8715 18.8906 12.0002 18.8906C10.1287 18.8906 9.8941 18.8826 9.15912 18.8491C8.42578 18.8156 7.9248 18.6991 7.48663 18.5288C7.02667 18.3558 6.61029 18.0846 6.26605 17.7339C5.91559 17.3899 5.64441 16.9733 5.47137 16.5135C5.30109 16.0754 5.18445 15.5744 5.15112 14.8411C5.11725 14.1061 5.10938 13.8713 5.10938 12C5.10938 10.1287 5.11725 9.89392 5.15094 9.15912C5.18427 8.4256 5.30072 7.9248 5.47101 7.48645C5.64404 7.02667 5.91541 6.61011 6.26605 6.26605C6.61011 5.91541 7.02667 5.64423 7.48645 5.47119C7.9248 5.3009 8.4256 5.18445 9.15912 5.15094C9.89392 5.11743 10.1287 5.10938 12 5.10938C13.8713 5.10938 14.1061 5.11743 14.8409 5.15112C15.5744 5.18445 16.0752 5.3009 16.5135 5.47101C16.9733 5.64404 17.3899 5.91541 17.7341 6.26605C18.0846 6.61029 18.356 7.02667 18.5288 7.48645C18.6993 7.9248 18.8157 8.4256 18.8492 9.15912C18.8828 9.89392 18.8906 10.1287 18.8906 12C18.8906 13.8713 18.8828 14.1061 18.8491 14.8409Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button  aria-label="pinterest" class="focus:ring-2 focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full">
            <svg class="fill-current text-gray-800 hover:text-gray-500" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.0027 0.554382C5.37441 0.554382 0 5.94525 0 12.5938C0 17.5224 2.9578 21.7577 7.18553 23.6228C7.15338 22.7843 7.18017 21.7739 7.39451 20.8602C7.62492 19.882 8.93771 14.2976 8.93771 14.2976C8.93771 14.2976 8.55191 13.529 8.55191 12.3949C8.55191 10.6105 9.58071 9.27759 10.8667 9.27759C11.9598 9.27759 12.4849 10.0999 12.4849 11.0835C12.4849 12.1853 11.783 13.83 11.424 15.3564C11.1239 16.6356 12.0616 17.6729 13.3208 17.6729C15.5928 17.6729 17.1253 14.7437 17.1253 11.2716C17.1253 8.63262 15.3516 6.66009 12.1313 6.66009C8.49297 6.66009 6.22103 9.38508 6.22103 12.4272C6.22103 13.4753 6.53181 14.217 7.01407 14.7867C7.23376 15.0501 7.26591 15.1576 7.18553 15.4585C7.12659 15.6789 6.99799 16.211 6.93905 16.426C6.85867 16.7324 6.61219 16.8398 6.33891 16.727C4.66176 16.039 3.87944 14.2008 3.87944 12.1262C3.87944 8.70786 6.75686 4.60694 12.4581 4.60694C17.0395 4.60694 20.0563 7.9339 20.0563 11.5027C20.0563 16.2271 17.436 19.753 13.578 19.753C12.2813 19.753 11.065 19.0489 10.647 18.2534C10.647 18.2534 9.95043 21.0268 9.8004 21.5642C9.54856 22.4941 9.05023 23.4185 8.59478 24.1441C9.6996 24.471 10.8454 24.6376 11.9973 24.6386C18.6256 24.6386 24 19.2477 24 12.5992C24 5.95062 18.6309 0.554382 12.0027 0.554382Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center mt-6">
          <p class="text-base leading-4 text-gray-800">2022 <span class="font-semibold">EcgPlus</span></p>
          <div class="border-l border-gray-800 pl-2 ml-2">
            <p class="text-base leading-4 text-gray-800">Autor: Jair Semblantes, Universidad Central del Ecuador, Optativa II</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <a-upload
      v-show="false"
      ref="upload"
      accept=".mat"
      :file-list="fileList"
      :before-upload="file => insertFile(file)"
      :remove="file => removeFile(file)"
      name="file"
    />
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  data: () => ({
    fileList: [],
    showError: false,
    inicio: false,
    ecgData: {},
    isLoading: false,
  }),
  methods: {
    filetob64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result?.toString().replace('data:', '').replace(/^.+,/, ''))
        reader.onerror = error => reject(error)
      })
    },
    async postEcg () {
      try {
        this.isLoading = true
        const data = {
          nameFile: this.fileList[0].name,
          b64: await this.filetob64(this.fileList[0])
        }
        this.ecgData = await this.$axios.$post('/api/ecg/', data)
      } catch (err) {
        const message = err.response ? err.response.data && err.response.data.message : err.message
        this.$error({
          title: 'Ha ocurrido un error',
          content: `${message}`,
          okText: 'Aceptar'
        })
      } finally {
        this.isLoading = false
      }
    },
    openFile () {
      const ref = this.$refs.upload
      console.log(ref.$refs.uploadRef.$refs.uploaderRef.onClick())
      // ref.$refs.input.click()
    },
    insertFile (file) {
      if (!file.name) {
        return false
      }
      if (file.name.indexOf('.mat') === -1) {
        this.$message.error('Solo se permiten archivos .mat')
        this.showError = true
        return false
      } else {
        this.showError = false
        this.fileList = []
        this.fileList.push(file)
      }
    },
    removeFile (file) {
      this.fileList.splice(this.fileList.indexOf(file), 1)
    },
  }

}
</script>
