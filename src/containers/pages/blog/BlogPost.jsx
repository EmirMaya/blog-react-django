import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { get_blog } from "redux/actions/blog";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogPost = ( ) => {
    const params = useParams();
    const slug = params.slug;
  useEffect(() => {
        get_blog()
  }, []);

  return(
      <FullWidthLayout>
         Home
      </FullWidthLayout>
  ) 
};

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {
 
})(BlogPost);