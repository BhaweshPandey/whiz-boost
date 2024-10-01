import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ImageWrapperProps {
    src: string;
    index?: number;
    h?:string;
    w?:string;
}
const ImageWrapper = ({ src, index, h, w }: ImageWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.25 });
    const overlayVariants = {
        hidden: { x: "0%", opacity: 0, transition: { duration: 0.7, ease: [0.455, 0.03, 0.515, 0.955] } },
        visible: { x: isInView ? "105%" : "0%", opacity: 1, transition: { duration: 0.7, ease: [0.455, 0.03, 0.515, 0.955] } }
    };
    const contentVariants = {
        hidden: { scale: 1, opacity: 0 },
        visible: { scale: 1.1, transition: { duration: 0.5, delay: 0.15, ease: "easeInOut" }, opacity: 1 }
    };

    return (

        <motion.div
            ref={ref}
            style={{
                position: "relative",
                overflow: "hidden",
                height: index ? "500px" : h,
                width: index ? "100%" : w,
                backgroundColor: "#FFFCED",
            
            }}
            whileHover={{ cursor: "url('https://barbora.design/wp-content/uploads/2023/06/Group-46.svg'), auto" }}
        >
            <motion.div
                style={{
                    width: "100%",
                    backgroundColor: "#FFFCED",
                    position: "absolute",
                    height: "100%",
                    willChange: "transform",
                    display: "block",
                    zIndex: 50,
                }}
                variants={overlayVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    // display: "flex",
                    // // flexDirection:"column",
                    // alignItems: "center",
                    // justifyContent: "center",
                }}
                variants={contentVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <Image
                
                    fill
                    src={src}
                    objectFit="cover"
                    alt="Card-Image"
                />
            </motion.div>
        </motion.div>
    );
};

export default ImageWrapper;
