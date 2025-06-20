const Faqtutorial = () =>{
    return(
        <div>
                {/* Tutorial Section */}
        <div className="px-3">
          <div>
            <h1 className=' text-3xl font-bold mb-5'>Portal Guide/Tutorial Section</h1>
            <div className='p-5'>
              <h2 className='mt-3 text-xl font-bold'>1. How can I get financial approval?</h2>
              <ol className='list-disc ml-3'>
                <li>Pay your school fees using your personal e-transact number:</li>
                <li>Go to the bank or pay online with your card.</li>
                <li>Use the e-transact platform (specific to your school).</li>
                <li>Wait for the payment to reflect on your student portal.</li>
                <li>It may take a little time; be patient.</li>
                <li>Once the payment reflects, your financial approval should be automatically processed.</li>
                <li>If it’s not approved after a reasonable time, contact the Bursary or ICT department for help.</li>
              </ol>

              <h2 className='mt-3 text-xl font-bold'>2. My course form page is blank why?</h2>
              <ol className='list-disc ml-3'>
                <li>Make sure you have:</li>
                <li>Paid your fees and gotten financial approval.</li>
                <li>Selected your meal type, hostel, and church options during registration.</li>
                <li>Submitted your course registration.</li>
                <li>Gotten your course advisor’s approval.</li>
                <li>If all the above is done and the course form is still blank:</li>
                <li>Try refreshing the page.</li>
                <li>If it still doesn’t show, log out and log in again.</li>
                <li>Still blank? Contact ICT support — the system may need to be synced.</li>
              </ol>

              <h2 className='mt-3 text-xl font-bold'>3. I have an error select meal type why?</h2>
              <ol className='list-disc ml-3'>
                <li>Go back to your registration form.</li>
                <li>Look for the "Meal Type" option — it's a required field.</li>
                <li>Select your preferred meal plan (e.g., l/s, b/l/s).</li>
                <li>Once selected:</li>
                <li>Re-check that you’ve also selected your hostel and church.</li>
                <li>Then click Submit Registration again.</li>
                <li>Now you should be allowed to select your hall.</li>
              </ol>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Faqtutorial;