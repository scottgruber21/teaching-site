<script>
  let activeFilter = 'all'
  let flipped = {}

  const items = [
    {
      id: 'sk-1',
      side: 'south',
      title: 'Miracle on the Han River',
      category: 'Economy',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      hint: 'Click to reveal how South Korea recovered from near-total destruction in 1953.',
      detail: 'Following the armistice, South Korea transitioned from a devastated, impoverished nation into a wealthy industrial powerhouse. It is now a global leader exporting electronics like Samsung, automobiles, and cultural phenomena like K-pop.'
    },
    {
      id: 'sk-2',
      side: 'south',
      title: 'The Democratic Transition',
      category: 'Politics',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      hint: 'Click to find out how military rule eventually gave way to a free society.',
      detail: 'For decades after the war, South Korea was ruled by military dictators who justified tight control by pointing to the constant threat from the North. Sustained public pressure led to open democratic elections in 1987.'
    },
    {
      id: 'sk-3',
      side: 'south',
      title: 'Global Tech & Pop Culture',
      category: 'Society',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      hint: 'Click to see the modern cultural footprint of a nation once built on foreign aid.',
      detail: 'South Korea leveraged its economic growth to become a major cultural exporter. Its television shows, movies, and music charts dominate global markets, establishing a powerful contrast to the isolated North.'
    },
    {
      id: 'nk-1',
      side: 'north',
      title: 'Three Generations of the Kim Family',
      category: 'Politics',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      hint: 'Click to see how power remained consolidated in a single regime for over 70 years.',
      detail: 'North Korea established a highly centralized dictatorship under Kim Il Sung. Power has passed through three generations of the family to Kim Jong Un, maintaining an unbroken line of totalitarian governance.'
    },
    {
      id: 'nk-2',
      side: 'north',
      title: 'Isolation & Human Rights',
      category: 'Society',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      hint: 'Click to discover the human cost of absolute state control.',
      detail: 'The regime enforces strict limits on information, speech, and movement, backed by harsh prison camps. A loss of Soviet aid combined with economic mismanagement caused a catastrophic famine during the 1990s.'
    },
    {
      id: 'nk-3',
      side: 'north',
      title: 'The Nuclear Deterrent',
      category: 'Security',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
      hint: 'Click to find out why the 1953 ceasefire created a modern global security challenge.',
      detail: 'Because the war never officially ended, North Korea prioritizes its military above all else. It developed nuclear weapons and long-range missiles to guarantee regime survival and deter foreign intervention.'
    }
  ]

  function toggleCard(id) {
    flipped[id] = !flipped[id]
  }

  function setFilter(filter) {
    activeFilter = filter
  }
</script>

<div class="space-y-8">
  <div class="flex justify-center gap-2 p-1 bg-slate-100 rounded-xl max-w-md mx-auto border border-slate-200">
    <button 
      class="flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-colors {activeFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}"
      on:click={() => setFilter('all')}
    >
      All Evidence
    </button>
    <button 
      class="flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-colors {activeFilter === 'south' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}"
      on:click={() => setFilter('south')}
    >
      South Korea
    </button>
    <button 
      class="flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-colors {activeFilter === 'north' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}"
      on:click={() => setFilter('north')}
    >
      North Korea
    </button>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each items as item}
      {#if activeFilter === 'all' || activeFilter === item.side}
        <button 
          class="group perspective h-64 w-full text-left focus:outline-none"
          on:click={() => toggleCard(item.id)}
        >
          <div class="relative w-full h-full duration-500 transform-style preserve-3d {flipped[item.id] ? 'rotate-y-180' : ''}">
            
            <div class="absolute inset-0 backface-hidden bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group-hover:border-slate-300 transition-colors">
              <div>
                <div class="flex justify-between items-start mb-4">
                  <span class="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border {item.badgeColor}">
                    {item.category}
                  </span>
                  <span class="text-[10px] font-bold uppercase tracking-widest {item.side === 'south' ? 'text-blue-600' : 'text-red-600'}">
                    {item.side === 'south' ? 'South' : 'North'}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p class="text-xs text-slate-400 italic flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                {item.hint}
              </p>
            </div>

            <div class="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-inner flex flex-col justify-between text-white">
              <div>
                <div class="flex justify-between items-center mb-3 border-b border-slate-800 pb-2">
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Historical Finding
                  </span>
                  <span class="text-[10px] uppercase font-semibold text-slate-500 bg-slate-800 px-2 py-0.5 rounded">
                    Evidence Case
                  </span>
                </div>
                <p class="text-sm text-slate-200 leading-relaxed">
                  {item.detail}
                </p>
              </div>
              <span class="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                Status: Unresolved Conflict
              </span>
            </div>

          </div>
        </button>
      {/if}
    {/each}
  </div>
</div>

<style>
  .perspective {
    perspective: 1000px
  }
  .preserve-3d {
    transform-style: preserve-3d
  }
  .backface-hidden {
    backface-visibility: hidden
  }
  .rotate-y-180 {
    transform: rotateY(180deg)
  }
</style>