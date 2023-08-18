import {Technology} from "../components/technology/Technology";
import {Footer} from "../components/common/Footer";

import {
    FaAngular,
    FaBitcoin,
    FaEthereum,
    FaMonero,
    FaMoneyBill,
    FaNodeJs,
    FaReact,
    FaRust,
    FaVuejs,
} from "react-icons/fa";

import {
    SiAbstract,
    SiAdobe,
    SiAdobeillustrator,
    SiAdobeindesign,
    SiAdobexd,
    SiAmazoncloudwatch,
    SiAntdesign,
    SiBlender,
    SiBlockchaindotcom,
    SiBootstrap,
    SiCanva,
    SiCardano,
    SiChainlink,
    SiCinema4D,
    SiCodeigniter,
    SiConstruct3,
    SiDaisyui,
    SiDjango,
    SiDotnet,
    SiExpress,
    SiFigma,
    SiFirebase,
    SiFlask,
    SiFlutter,
    SiGodotengine,
    SiInvision,
    SiIonic,
    SiKotlin,
    SiLaravel,
    SiLitecoin,
    SiMongodb,
    SiMui,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiNuxtdotjs,
    SiOpenzeppelin,
    SiOwasp,
    SiPolkadot,
    SiPostgresql,
    SiPrisma,
    SiRedux,
    SiRipple,
    SiRubyonrails,
    SiSketch,
    SiSpring,
    SiSqlite,
    SiStellar,
    SiSvelte,
    SiSwift,
    SiSymfony,
    SiTailwindcss,
    SiTether,
    SiThreedotjs,
    SiUnity,
    SiUnrealengine,
    SiWireshark,
    SiXamarin,
    SiYamahacorporation,
    SiZendesk,
} from "react-icons/si";

import {TbBrandReactNative} from "react-icons/tb";

const DesignTechnologies = [
    {
        name: "Adobe Photoshop",
        icon: <SiAdobe color="#FF0000"/>,
    },
    {
        name: "Adobe Illustrator",
        icon: <SiAdobeillustrator color="#FF7C00"/>,
    },
    {
        name: "Sketch",
        icon: <SiSketch color="#FDBD00"/>,
    },
    {
        name: "Figma",
        icon: <SiFigma color="#0ACF83"/>,
    },
    {
        name: "InVision",
        icon: <SiInvision color="#FF3366"/>,
    },
    {
        name: "Adobe XD",
        icon: <SiAdobexd color="#FF61F6"/>,
    },
    {
        name: "Canva",
        icon: <SiCanva color="#00C4CC"/>,
    },
    {
        name: "InDesign",
        icon: <SiAdobeindesign color="#EE3D8F"/>,
    },
    {
        name: "Blender",
        icon: <SiBlender color="#F5792A"/>,
    },
    {
        name: "Zeplin",
        icon: <SiOpenzeppelin color="#F04A50"/>,
    },
    {
        name: "Abstract",
        icon: <SiAbstract color="#6A85B6"/>,
    },
    {
        name: "Cinema 4D",
        icon: <SiCinema4D color="#9A9A9A"/>,
    },
];

const FrontendTechnologies = [
    {
        name: "React",
        icon: <FaReact color="#61DAFB"/>,
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs color="#000000"/>,
    },
    {
        name: "Svelte",
        icon: <SiSvelte color="#FF3E00"/>,
    },
    {
        name: "Angular",
        icon: <FaAngular color="#DD0031"/>,
    },
    {
        name: "Vue.js",
        icon: <FaVuejs color="#4FC08D"/>,
    },
    {
        name: "Nuxt.js",
        icon: <SiNuxtdotjs color="#00C58E"/>,
    },
    {
        name: "Ant Design",
        icon: <SiAntdesign color="#0170FE"/>,
    },
    {
        name: "Redux",
        icon: <SiRedux color="#764ABC"/>,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss color="#38B2AC"/>,
    },
    {
        name: "Daisy UI",
        icon: <SiDaisyui color="#f000b8"/>,
    },
    {
        name: "Material-UI",
        icon: <SiMui color="#0081CB"/>,
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap color="#7952B3"/>,
    },
];

const BackendTechnologies = [
    {
        name: "Node.js",
        icon: <FaNodeJs color="#8CC84B"/>,
    },
    {
        name: "Express.js",
        icon: <SiExpress color="#000000"/>,
    },
    {
        name: "Nest.js",
        icon: <SiNestjs color="#E0234E"/>,
    },
    {
        name: "Django",
        icon: <SiDjango color="#092E20"/>,
    },
    {
        name: "Flask",
        icon: <SiFlask color="#000000"/>,
    },
    {
        name: "Ruby on Rails",
        icon: <SiRubyonrails color="#CC0000"/>,
    },
    {
        name: "Spring Boot",
        icon: <SiSpring color="#6DB33F"/>,
    },
    {
        name: "Laravel",
        icon: <SiLaravel color="#FF2D20"/>,
    },
    {
        name: "Symfony",
        icon: <SiSymfony color="#000000"/>,
    },
    {
        name: "CodeIgniter",
        icon: <SiCodeigniter color="#EF4223"/>,
    },
    {
        name: "Rust",
        icon: <FaRust color="#DEA584"/>,
    },
    {
        name: ".NET",
        icon: <SiDotnet color="#512BD4"/>,
    },
];

const CryptocurrencyTechnologies = [
    {
        name: "Bitcoin",
        icon: <FaBitcoin color="#F7931A"/>,
    },
    {
        name: "Ethereum",
        icon: <FaEthereum color="#627EEA"/>,
    },
    {
        name: "Litecoin",
        icon: <SiLitecoin color="#A6A9AA"/>,
    },
    {
        name: "Ripple",
        icon: <SiRipple color="#0080C6"/>,
    },
    {
        name: "Cardano",
        icon: <SiCardano color="#3E863D"/>,
    },
    {
        name: "Stellar",
        icon: <SiStellar color="#08B5E5"/>,
    },
    {
        name: "Blockchain",
        icon: <SiBlockchaindotcom color="#0E76A8"/>,
    },
    {
        name: "Digital Money",
        icon: <FaMoneyBill color="#008000"/>,
    },
    {
        name: "Tether",
        icon: <SiTether color="#00BFFF"/>,
    },
    {
        name: "Polkadot",
        icon: <SiPolkadot color="#E6007A"/>,
    },
    {
        name: "Chainlink",
        icon: <SiChainlink color="#2A5ADA"/>,
    },
    {
        name: "Monero",
        icon: <FaMonero color="#FF6600"/>,
    },
];

const DatabaseFrameworks = [
    {
        name: "MySQL",
        icon: <SiMysql color="#4479A1"/>,
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql color="#336791"/>,
    },
    {
        name: "SQLite",
        icon: <SiSqlite color="#003B57"/>,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb color="#47A248"/>,
    },
    {
        name: "Prisma",
        icon: <SiPrisma color="#1B222D"/>,
    },
    {
        name: "Firebase",
        icon: <SiFirebase color="#FFCB2B"/>,
    },
];

const AppDevelopment = [
    {
        name: "Flutter",
        icon: <SiFlutter color="#02569B"/>,
    },
    {
        name: "Swift",
        icon: <SiSwift color="#FA7343"/>,
    },
    {
        name: "Kotlin",
        icon: <SiKotlin color="#7F52FF"/>,
    },
    {
        name: "Xamarin",
        icon: <SiXamarin color="#3498DB"/>,
    },
    {
        name: "Ionic",
        icon: <SiIonic color="#3880FF"/>,
    },
    {
        name: "React Native",
        icon: <TbBrandReactNative color="#61DBFB"/>,
    },
];

const GameDevelopment = [
    {
        name: "Unity",
        icon: <SiUnity color="#000000"/>,
    },
    {
        name: "Unreal Engine",
        icon: <SiUnrealengine color="#0053D0"/>,
    },
    {
        name: "Godot Engine",
        icon: <SiGodotengine color="#628A3F"/>,
    },
    {
        name: "Construct",
        icon: <SiConstruct3 color="#00A4E1"/>,
    },
    {
        name: "Three.js",
        icon: <SiThreedotjs color="#000000"/>,
    },
    {
        name: "Godot Engine",
        icon: <SiGodotengine color="#628A3F"/>,
    },
];

const Cybersecurity = [
    {
        name: "Wireshark",
        icon: <SiWireshark color="#1679A7"/>,
    },
    {
        name: "OWASP",
        icon: <SiOwasp color="#FF8000"/>,
    },
    {
        name: "YARA",
        icon: <SiYamahacorporation color="#8DB600"/>,
    },
    {
        name: "Zeek",
        icon: <SiZendesk color="#2B5B92"/>,
    },
    {
        name: "Moloch",
        icon: <SiAmazoncloudwatch color="#4B4B4B"/>,
    },
    {
        name: "Wireshark",
        icon: <SiWireshark color="#1679A7"/>,
    },
];

export function TechnologyPage() {
    return (
        <div className='flex flex-col space-y-10'>
            <Technology title={'Design Technologies'} technologies={DesignTechnologies}/>
            <Technology title={'Frontend Technologies'} technologies={FrontendTechnologies}/>
            <Technology title={'Database & Frameworks'} technologies={DatabaseFrameworks}/>
            <Technology title={'App Development'} technologies={AppDevelopment}/>
            <Technology title={'Game Development'} technologies={GameDevelopment}/>
            <Technology title={'Cryptocurrency'} technologies={CryptocurrencyTechnologies}/>
            <Technology title={'Cybersecurity'} technologies={Cybersecurity}/>
            <Footer/>
        </div>
    )
}