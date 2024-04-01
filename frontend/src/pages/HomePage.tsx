const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-5 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
            Experience the pleasure of takeaway tonight!
            </h1>
            <span className="text-xl"> Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <img src="https://cdn.discordapp.com/attachments/1223496785373433977/1223507581104947280/landing.png?ex=661a1b3b&is=6607a63b&hm=f2e16d19dfcda04347fc24e5f5d5f2621779b7f41e444c46fd0c5537aa03a9ea&"/>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter">
              Order Takeaway Even Faster!
            </span>
            <span>
              Download CurryCourier App for convinient ordering and personalized recommendations.
            </span>
            <img src="https://cdn.discordapp.com/attachments/1223496785373433977/1223507754115792986/appDownload.png?ex=661a1b64&is=6607a664&hm=a7759dcabf45c8a00d4326dd73c55191c98242e15e245089b043173cf3a22a2a&"/>
          </div>
        </div>
    </div>
  )
}

export default HomePage;