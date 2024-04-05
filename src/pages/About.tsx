import Navbar from '../components/Navbar'

const group17 = [
    {
        name: 'Francisco Guerrero',
        role: 'Collaborative Mission Control Specialist',
        image: '.../public/assets/images/francisco-image.jpg',
        description: 'Current Senior Undergraduate.'
    },
    {
        name: 'Christopher Aragon',
        role: 'Collaborative Mission Control Specialist',
        image: '.../public/assets/images/christopher-aragon.png',
        description: 'Current Senior Undergraduate.'
    },
    {
        name: "Bryan Cooke",
        role: 'LIDAR Navigation Specialist',
        image: '.../public/assets/images/bryan-cooke.png',
        description: 'Current Senior Undergraduate.'
    },
    {
        name: "Chirstopher Anastatis",
        role: 'LIDAR Navigation Specialist',
        image: '.../public/assets/images/christopher-anastasis.png',
        description: 'Current Senior Undergraduate.'
    },
    {
        name: "Charles Fernandez-Hamoui",
        role: 'LIDAR Navigation Specialist/',
        image: '.../public/assets/images/charles-fernandez-hamoui-pic.png',
        description: 'Current Senior Undergraduate.'
    }
]



function About() {
    return (
        <>
            <Navbar />
            <div className="sm:py-32">
                <div className="container mx-auto">

                    <div className="py-20 flex flex-col justify-center text-center">

                        <h2 className="text-3xl font-bold  text-white sm:text-4xl">Meet our Team</h2>

                        <p className="mt-6 text-lg text-lime-300 ">
                            We are group 17.</p>
                    </div>


                    <ul role="list" className="py-20 flex justify-center text-center">
                        {group17.map((member) => (
                            <li key={member.name} className="">
                                <div className="items-center text-center p-8" id='member-element'>
                                    <img className="h-48 w-48 rounded-xl mx-auto" src={member.image} alt="group member 17" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{member.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-cyan-400">{member.role}</p>

                                        <p className="text-xs font-semibold leading-6 text-white">{member.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About