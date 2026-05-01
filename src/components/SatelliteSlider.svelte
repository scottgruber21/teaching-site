<script>
  let sliderValue = 50; // Percentage of the "modern" map showing
  
  // Props for the images (paths should match your src/assets folder)
  export let nightImage = "/assets/korea-night.jpg";
  export let mapImage = "/assets/korea-map.jpg";
</script>

<div class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl border-4 border-white aspect-video bg-slate-900">
  <img 
    src={nightImage} 
    alt="Korean Peninsula at night" 
    class="absolute inset-0 w-full h-full object-cover"
  />

  <div 
    class="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white/50"
    style="clip-path: inset(0 {100 - sliderValue}% 0 0);"
  >
    <img 
      src={mapImage} 
      alt="Modern political map of Korea" 
      class="w-full h-full object-cover"
    />
  </div>

  <input 
    type="range" 
    min="0" 
    max="100" 
    bind:value={sliderValue}
    class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
  />

  <div 
    class="absolute top-0 bottom-0 w-1 bg-white z-10 pointer-events-none"
    style="left: {sliderValue}%"
  >
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
      <span class="text-slate-800 text-xl font-bold">↔</span>
    </div>
  </div>

  <div class="absolute bottom-4 left-4 z-30 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
    1953: The Line of Light
  </div>
  <div class="absolute bottom-4 right-4 z-30 bg-white/90 text-slate-900 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
    Modern Borders
  </div>
</div>

<style>
  /* Ensure the slider fills the space and is easy to grab on mobile */
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
  }
</style>