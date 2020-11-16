import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";

import brand_logo from '../static/images/logo.svg'

const Content = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const BrandLogo = styled(motion.img)`
  height: 150px;
  width: 150px;
`;

const BrandName = styled(motion.p)`
  font-size: 40px;
`;

export default function LoadingScreen() {
    return (
        <>
            <Content>
                <BrandLogo
                    initial={{ y: -70, opacity: 0 }}
                    animate={{ y: -50, opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        type: "spring",
                        stiffness: 120
                    }}
                    src={brand_logo}
                ></BrandLogo>
                <BrandName
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: -20, opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        type: "spring",
                        stiffness: 120
                    }}
                >
                    Predict
        </BrandName>
            </Content>
        </>
    );
}
