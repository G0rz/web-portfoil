import Image from "next/image";

export default function Hero() {
    return (
        <div className={"flex flex-wrap  w-full text-center sm:text-start my-8 gap-4"}>
            <div className={"mx-auto sm:m-0"}>
                <Image
                    alt="Profile Image"
                    className="rounded-full"
                    priority
                    src="/images/profile.webp"
                    width={250}
                    height={250}
                />
            </div>
            <h1 className="text-4xl font-extrabold w-full">  Leonardo Becerril  </h1>
            <strong className="text-lg w-full">Ingeniero en Sistemas Computacionales</strong>
        </div>
    )
}