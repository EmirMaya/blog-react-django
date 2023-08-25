import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";


const Home = () => {
;

  return(
      <FullWidthLayout>
         Home
      </FullWidthLayout>
  ) 
};

const mapStateToProps = (state) => ({
   
});

export default connect(mapStateToProps, {

})(Home);
