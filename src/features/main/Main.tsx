import React from 'react';
import {Home} from "./home/Home";
import styled from "styled-components";
import {About} from "./about/About";
import {Skills} from "./skills/Skills";
import {Portfolio} from "./portfolio/Portfolio";
import {Contacts} from "./contacts/Contacts";

export const Main = () => {
    return (
        <Wrapper>
            <Home/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  margin-top: 50px;
  margin-left: 500px;
  margin-right: 120px;

  height: 100vh;
  
  gap: 150px;

`