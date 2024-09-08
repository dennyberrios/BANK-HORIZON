import styled from "styled-components";

export const ContentBanner = styled.section `
    position: relative;
    margin: 50px 0;


    .first-notebook, .second-notebook {
        width: 65%;
        position: absolute;
    }

    @media (max-width: 480px) {
        width: 300px;
        height: 190px;
        

        .first-notebook {
            width: 70%;
            top: 0;
            left: 5%;
        }

        .second-notebook {
            width: 50%;
            top: 49%;
            right: 7%;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        width: 481px;
        height: 300px;

        .first-notebook {
            width: 70%;
            top: 0;
            left: 5%;
        }

        .second-notebook {
            width: 50%;
            top: 49%;
            right: 7%;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 750px;
        height: 460px;

        .first-notebook {
            width: 70%;
            top: 0;
            left: 5%;
        }

        .second-notebook {
            width: 50%;
            top: 49%;
            right: 7%;
        }
    }

    @media (min-width: 1025px) and (max-width: 1200px) {
        width: 1000px;
        height: 600px;

        .first-notebook {
            width: 70%;
            top: 0;
            left: 5%;
        }

        .second-notebook {
            width: 50%;
            top: 50%;
            right: 7%;
        }
    }

    @media (min-width: 1201px) {
        width: 1000px;
        height: 600px;

        .first-notebook {
            width: 70%;
            top: 0;
            left: 5%;
        }

        .second-notebook {
            width: 50%;
            top: 50%;
            right: 7%;
        }
    }
`;