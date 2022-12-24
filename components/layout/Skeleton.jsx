import React from 'react'

const Skeleton = () => {
  return (
    <div>
      <div class="flex items-center justify-center lg:px-16">
            <div class="relative w-full max-w-lg">
              <div class="m-8 relative space-y-4">

                <div class="p-2 lg:p-4 bg-gray-100 rounded-lg flex items-center justify-between space-x-8">
                  <div class="flex-1 flex justify-between items-center">
                    <div class="h-4 w-48 bg-gray-300 rounded"></div>
                    <div class="w-24 h-6 invisible lg:visible rounded-lg bg-purple-300"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
    </div>
  )
}

export default Skeleton