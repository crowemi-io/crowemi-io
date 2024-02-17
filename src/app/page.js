export default function Page() {
  return (
    <div>
      <div className="bg-primary">
        <div className="mx-auto container text-center pt-20 pb-20">
          <div>
            <div className="sm:inline-block hidden text-6xl font-medium whitespace-nowrap text-white pb-5">welcome to <span className="bg-secondary pr-2 pl-2 italic">crowemi-io</span></div>
            <div className="text-xl leading-loose text-gray-300">
              <span className="italic bg-secondary pr-2 pl-2">crowemi-io</span> is a technology consulting firm providing technology services for web, data, and business process automation.
            </div>
          </div>
          <div className="flex pt-20 pb-20">
            <div className="basis-3/4"></div>
            <div className="basis-1/4">just because you don't have technology professionals on-staff, doesn't mean you can't have top-tier technology solutions. Partner with us and elevate your business with expert tech consulting.</div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto container">
          <div>
            <div className="text-center">
              <div className="sm:inline-block hidden text-6xl font-medium whitespace-nowrap pt-20">services</div>
              <div className="text-xl leading-loose text-gray-300 pb-5">

                just because you don't have technology professionals on-staff, doesn't mean you can't have top-tier technology solutions. Partner with us and elevate your business with expert tech consulting.
              </div>
            </div>
            <div className="pt-10 pb-20 sm:grid sm:grid-rows-3 sm:grid-flow-col gap-4">
              <div className="flex flex-row">
                <div className="pr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                <div className="text-left font-medium text-lg">web hosting</div>
              </div>
              <div>web development</div>
              <div>web integration</div>
              <div>data warehousing</div>
              <div>data modeling</div>
              <div>data strategy</div>
              <div>process automation</div>
              <div>process re/engineering</div>
              <div>strategy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}