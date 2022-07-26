import { ThreeDots } from "react-loader-spinner";

import { Wrapper } from 'components/Loader/Loader.styled.js';



export const Loader = () => {
     return  (
          <Wrapper>
               <ThreeDots  color='#00BFFF' height={80} width={80} />
          </Wrapper>
     );
};

