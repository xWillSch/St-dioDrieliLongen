import styled from "styled-components";

export const Container = styled.div`
  .back {
    position: absolute;
    color: yellow;
    margin-left: 5rem;
    padding: 2rem;
    
  }
      h1 {
      font-size: 7.5rem;
      font-family: 'Voga', sans-serif;
      font-weight: 700;
      text-align: center;
      
      margin: 6rem;
    }

    video {
      
      display: flex;
      margin: 0 auto;

    }

    @media screen and (max-width: 1400px) {
        video {
          margin: 0 auto;
          padding: 8rem;
        }
    }

    @media screen and (max-width: 1170px) {
      video {
        position: relative;
        padding: 10rem;
        left: 0;
      }
    }

    @media screen and (max-width:800px) {
      video {
        width: 80rem;
      }
    }

    @media screen and (max-width: 600px) { 
      .back {
        position: relative;
      }

      .infos {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      h1 {
        font-size: 6rem;
      }

      video {
        padding: 0;

        width: 40rem;
        margin: 0 auto;

        position: relative;
      }

}
`;