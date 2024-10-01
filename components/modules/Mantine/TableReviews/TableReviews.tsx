import I18nContext from '@/context/i18nContext';
import { translate } from '@/i18n';
import { Table, Anchor, Container, Group, Flex, Box } from '@mantine/core';
import { motion, useInView } from "framer-motion";
import { useContext, useRef } from 'react';

const Languages = {
    en: "en",
    ar: "ar"
  };
  
  type LanguageTypes = keyof typeof Languages;


export function TableReviews() {
    const context = useContext(I18nContext);

    if (!context) {
      throw new Error('LanguageSelector must be used within an I18nProvider');
    }
  
    const { language, changeLanguage } = context;

const data = [
    {
        title: { en: "Lorem ipsum dolor", ar: "جائزة AWWWARDS للتميز" },
        author:  { en: "Isaac Asimov", ar: "إسحاق عظيموف" },
        year: 2023,
    },
    {
        title: { en: "Lorem ipsum dolor", ar: "جائزة AWWWARDS للتميز" },
        author:   { en: "Mary Shelley", ar: "ماري شيلي" },
        year: 1818,
    },
    {
        title: { en: "Lorem ipsum dolor", ar: "مرشح لجائزة AWWWARDS" },
        author:   { en: "Stanislaw Lem", ar: "ستانيسلاف ليم" },
        year: 1961,
    },

];

    const rowVariantOne = {
        initial: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        transition: {
            delay: 0.5,
            type: "easeIn",
        }

    }
    const rowVariantTwo = {
        initial: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        transition: {
            delay: 0.9,
            type: "easeIn",

        }

    }
    const rowVariantThree = {
        initial: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        transition: {
            delay: 1,
            type: "easeIn",

        }

    }
    const row1 = useRef(null);
    const row2 = useRef(null);
    const row3 = useRef(null);
    const isInView1 = useInView(row1)
    const isInView2 = useInView(row2)
    const isInView3 = useInView(row3)
   

    return (

        // <Table.ScrollContainer minWidth={"100%"} mb={120}>
        //     <Table verticalSpacing="md" horizontalSpacing={"xl"} mt={50}>
        //         <Table.Tbody pt={"15px"} pb={"15px"}>
        //             <motion.tr initial="initial" animate={isInView1 ? "visible" : "hidden"} ref={row1} variants={rowVariantOne} key={data[0].title}
        //                 style={{ borderTop: "1px solid #fffced", borderBottom: "1px solid #fffced", padding: "10px", }}
        //             >

        //                 <Table.Td >
        //                     <Anchor component="button" fz="lg" c="#fffced">
        //                         {data[0].title}
        //                     </Anchor>
        //                 </Table.Td>
        //                 <Table.Td>
        //                     <Anchor component="button" fz="lg" c="#fffced">
        //                         {data[0].author}
        //                     </Anchor>
        //                 </Table.Td>




        //                 <Table.Td>
        //                     {data[0].year}
        //                 </Table.Td>

        //             </motion.tr>
        //             <motion.tr initial="initial" animate={isInView2 ? "visible" : "hidden"} ref={row2} variants={rowVariantTwo} key={data[1].title} style={{ borderTop: "1px solid #fffced", borderBottom: "1px solid #fffced" }} >
        //                 <Table.Td>
        //                     <Anchor component="button" fz="lg" c="#fffced">

        //                         {data[1].title}
        //                     </Anchor>
        //                 </Table.Td>
        //                 <Table.Td>
        //                     <Anchor component="button" fz="lg" c="#fffced">
        //                         {data[1].author}
        //                     </Anchor>
        //                 </Table.Td>
        //                 <Table.Td>
        //                     {data[1].year}
        //                 </Table.Td>
        //             </motion.tr>

        //             <motion.tr initial="initial" animate={isInView3 ? "visible" : "hidden"} ref={row3} variants={rowVariantThree} key={data[2].title} style={{ borderTop: "1px solid #fffced", borderBottom: "1px solid #fffced" }}>
        //                 <Table.Td>
        //                     <Anchor component="button" fz="lg" c="#fffced">
        //                         {data[2].title}
        //                     </Anchor>
        //                 </Table.Td>
        //                 <Table.Td>
        //                     <Anchor component="button" fz="lg" c="#fffced">
        //                         {data[2].author}
        //                     </Anchor>
        //                 </Table.Td>
        //                 <Table.Td>
        //                     {data[2].year}
        //                 </Table.Td>
        //             </motion.tr>
        //         </Table.Tbody>
        //     </Table>
        // </Table.ScrollContainer>

        <Table.ScrollContainer minWidth={"100%"} mb={120}>
            <Table verticalSpacing="md" horizontalSpacing={"xl"} mt={50}>
                <Table.Tbody pt={"15px"} pb={"15px"}>
                    <motion.tr
                        initial="initial"
                        animate={isInView1 ? "visible" : "hidden"}
                        ref={row1}
                        variants={rowVariantOne}
                        key={data[0].title.en}
                        style={{ borderTop: "1px solid #fffced", borderBottom: "1px solid #fffced", padding: "10px", whiteSpace:"normal" }}
                    >
                        <Table.Td  w={"30%"}>
                            <Anchor component="button" fz="lg" c="#fffced">
                                {data[0].title[language as LanguageTypes]}
                            </Anchor>
                        </Table.Td>
                        <Table.Td  w={"70%"}>
                            <Anchor component="button" fz="lg" c="#fffced">
                                {data[0].author[language as LanguageTypes]}
                            </Anchor>
                        </Table.Td>
                        <Table.Td>
                            {data[0].year}
                        </Table.Td>
                    </motion.tr>
                    <motion.tr
                        initial="initial"
                        animate={isInView2 ? "visible" : "hidden"}
                        ref={row2}
                        variants={rowVariantTwo}
                        key={data[1].title.en}
                        style={{ borderTop: "1px solid #fffced", borderBottom: "1px solid #fffced", padding: "10px" }}
                    >
                        <Table.Td>
                            <Anchor component="button" fz="lg" c="#fffced">
                                {data[1].title[language as LanguageTypes]}
                            </Anchor>
                        </Table.Td>
                        <Table.Td>
                            <Anchor component="button" fz="lg" c="#fffced">
                                {data[1].author[language as LanguageTypes]}
                            </Anchor>
                        </Table.Td>
                        <Table.Td>
                            {data[1].year}
                        </Table.Td>
                    </motion.tr>
                    <motion.tr
                        initial="initial"
                        animate={isInView3 ? "visible" : "hidden"}
                        ref={row3}
                        variants={rowVariantThree}
                        key={data[2].title.en}
                        style={{ borderTop: "1px solid #fffced", borderBottom: "1px solid #fffced", padding: "10px" }}
                    >
                        <Table.Td>
                            <Anchor component="button" fz="lg" c="#fffced">
                                {data[2].title[language as LanguageTypes]}
                            </Anchor>
                        </Table.Td>
                        <Table.Td>
                            <Anchor component="button" fz="lg" c="#fffced">
                                {data[2].author[language as LanguageTypes]}
                            </Anchor>
                        </Table.Td>
                        <Table.Td>
                            {data[2].year}
                        </Table.Td>
                    </motion.tr>
                </Table.Tbody>
            </Table>
        </Table.ScrollContainer>


    );
}