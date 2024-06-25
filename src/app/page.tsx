export default function Home() {
  return (
    <section className="p-5">
      <div>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db562acf-abe8-47af-88a5-27d210e3b0bb/d7unkqe-830b81a1-fae9-4eef-99b8-3959d4bacbea.jpg/v1/fill/w_1024,h_1027,q_75,strp/valar_morghulis__valar_dohaeris_by_iloverogertaylor_d7unkqe-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiNTYyYWNmLWFiZTgtNDdhZi04OGE1LTI3ZDIxMGUzYjBiYlwvZDd1bmtxZS04MzBiODFhMS1mYWU5LTRlZWYtOTliOC0zOTU5ZDRiYWNiZWEuanBnIiwiaGVpZ2h0IjoiPD0xMDI3Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvZGI1NjJhY2YtYWJlOC00N2FmLTg4YTUtMjdkMjEwZTNiMGJiXC9pbG92ZXJvZ2VydGF5bG9yLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.rw-vE2XVFEhHjaLusvz7YCALIkOU9mXz7th-lpSfcpY"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100" />
              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold font-IBMPlex sm:text-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore, debitis.
                </h2>
                <p className="mt-4  font-IBMPlex text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-block rounded border border-black bg-valar3 px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-valar3 focus:outline-none focus:ring active:text-valar3"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold font-IBMPlex  text-gray-900 sm:text-3xl">
            Our collections
          </h2>
          <p className="mx-auto mt-4 max-w-md font-IBMPlex text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>
        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <a href="/" className="group relative block">
              <img
                src="https://images.unsplash.com/photo-1610282081854-9c311350beb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRvdGUlMjBiYWdzfGVufDB8fDB8fHww"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-IBMPlex font-medium text-white">
                  Tote Bags
                </h3>
                <span className="mt-1.5 inline-block font-IBMPlex bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="/" className="group relative block">
              <img
                src="https://images.unsplash.com/photo-1530968831187-a937ade474cb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-IBMPlex font-medium text-white">
                  Mugs
                </h3>
                <span className="mt-1.5  font-IBMPlex inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="/" className="group relative block">
              <img
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl  font-IBMPlex font-medium text-white">
                  Casual T-shirts
                </h3>
                <span className="mt-1.5 inline-block font-IBMPlex bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
