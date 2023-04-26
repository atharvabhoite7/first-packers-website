import React from 'react'

const ChatBot = () => {

  return (
    <div class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
        {/* <body class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10"> */}

{/* <!-- Component Start --> */}
<div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
    <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
        <div class="flex w-full mt-2 space-x-3 max-w-xs">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p class="text-sm">Hello! How can I help you?</p>
                </div>
                {/* <span class="text-xs text-gray-500 leading-none">2 min ago</span> */}
            </div>
        </div>
        {/* <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div> */}
        {/* <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div> */}
        {/* <div class="flex w-full mt-2 space-x-3 max-w-xs">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
        </div> */}
        {/* <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
        <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div> */}
        {/* <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div> */}
        {/* <div class="flex w-full mt-2 space-x-3 max-w-xs">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
        </div> */}
        <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit.</p>
                </div>
                {/* <span class="text-xs text-gray-500 leading-none">2 min ago</span> */}
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
    </div>
    
    <div class="bg-gray-300 p-4">
        <input class="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"/>
    </div>
</div>
{/* <!-- Component End  --> */}

{/* </body> */}
    </div>
  )
}

export default ChatBot