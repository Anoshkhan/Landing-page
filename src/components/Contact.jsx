import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Full Name'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='abc@xyz.com'/>
                </div>
                <div>
                    <label>Query</label>
                    <input type="text" required placeholder='Your Message?'/>
                </div>
                <button>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact