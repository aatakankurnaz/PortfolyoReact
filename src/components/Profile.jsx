export const Profile = () => {
    return (
        <div className="flex flex-col gap-3">
            <h1>Profile</h1>
            <div className="flex gap-40">
                <div className="flex flex-col gap-3">
                    <h2>Profile</h2>
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="text-black font-bold">Doğum Tarihi</p>
                            <p className="text-black font-bold">İkamet Şehri</p>
                            <p className="text-black font-bold">Eğitim Durumu</p>
                            <p className="text-black font-bold">Tercih Ettiği Rol</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-black">18.07.1994</p>
                            <p className="text-black">Trabzon</p>
                            <p className="text-black">Kocaeli Ünv. Kamu Yönetimi, <br />
                            Lisans, 2018</p>
                            <p className="text-black">Frontend, UI</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>About Me</h2>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam <br />
                    aut, odit laborum aliquam voluptatum nisi mollitia.
                    </p>
                    <p>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta <br />
                    quod deserunt quam temporibus cumque magnam! </p>
                </div>
            </div>
            <hr />
        </div>
    )
}