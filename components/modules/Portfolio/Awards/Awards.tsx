import { Box, Card, Container, Text, Title } from "@mantine/core";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import classes from "./Awards.module.css";
import { translate } from "@/i18n";

const AwardsSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Create a more granular transform mapping with custom waypoints
    const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["-85%", "-15%", "0%", "15%", "85%"]);

    return (
        <Box className={classes.horizontalScrollContainer}>
            <Box>
                <motion.div ref={targetRef} style={{ x }} >
                    {translate("landingPageFour.awards")}
                </motion.div>
            </Box>
        </Box>
    );

};

export default AwardsSection;