import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.png";
import get from "../assets/get.png";
import Button from "./Button";
import Navbar from "./Navbar";
import "@fontsource/montserrat";


export default function Home() {
  return (
    <Section>
      <Navbar />
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          <h1>
            Unduh Aplikasi, Mulai Rakit PC sesuai keinginan.
          </h1>
          <p>
            RakitPC adalah aplikasi yang berguna untuk
            membantu User dalam membangun komputer, bahkan 
            tanpa pengetahuan tentang komputer sekalipun
            Anda dapat membangun Komputer sesuai keinginan 
            dan kegunaan Anda.<br /><br />
            Mari Bangun Komputer Impian Anda Sekarang!!!
          </p>
          <div className="img">
            <a href="https://play.google.com/store/apps/details?id=com.rakitpc.rakitpc">
              <img src={get} alt="get" />
            </a>
          </div>
          {/* <div className="data">
            <div className="dataTab">
              <h2>40K</h2>
              <h5>Artwork</h5>
            </div>
            <div className="dataTab">
              <h2>12K</h2>
              <h5>Auction</h5>
            </div>
            <div className="dataTab">
              <h2>20K</h2>
              <h5>Artist</h5>
            </div>
          </div> */}
        </div>
        <div className="image">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 0.5rem;
  background-color: #232835;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
  .ellipse {
    background-color: #EDEDED;
    height: 30rem;
    width: 30rem;
    border-radius: 100%;
    filter: blur(2000px);
    opacity: 0.5;
    position: absolute;
    bottom: -30%;
    left: -10%;
    z-index: 1;
  }
  .container {
    padding: 2rem;
    margin: 0 2rem;
    display: flex;
    .content {
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 5rem;
      padding-right: 2rem;
      h1 {
        color: white;
        font-size: 2rem;
        margin-top: 5rem;
        font-family: 'Montserrat';
        span {
          .img {
          }
        }
      }
      p {
        color: #a6a6a6;
        font-family: 'Montserrat';
      }
      .buttons {
        display: flex;
        gap: 2rem;
      }
      .data {
        display: flex;
        gap: 5rem;
        .dataTab {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          h2 {
            font-size: 2rem;
            color: white;
          }
          h5 {
            text-align: center;
            color: #a6a6a6;
          }
        }
      }
    }
    .image {
      img {
        height: 25rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    border-radius: 0;
    .container {
      flex-direction: column;
      margin: 0;
      padding: 2rem;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      .content {
        padding-right: 0;
        h1 {
          font-size: 3rem;
          span {
            img {
              height: 2rem;
            }
          }
        }
        .buttons {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .data {
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }
      }
      .image {
        img {
          height: 15rem;
        }
      }
    }
  }
`;
