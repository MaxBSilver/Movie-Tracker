import React, { Component } from "react";
import { APIkey } from "../../Utility/Config/Key";
import { getTopMovies } from "../../Utility/Helpers/GetTopMovies";
import { connect } from "react-redux";
import { addTopMovies } from "../../Actions/index";
import CardContainer from "../../Components/CardContainer/CardContainer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      topMovies: [],
      currentPage: 0,
      moviesArray: []
    };
  }
  async componentDidMount() {
    const { currentPage } = this.state;
    let incrementedPage = currentPage + 1;
    let movies = await getTopMovies(APIkey, incrementedPage);
    this.props.addTopMovies(movies);
  }

  render() {
    return (
      <section className="home-container">

        <h2 className="home-title"> </h2>

        {this.props.topMovies.length > 0 ? (
          <CardContainer
            topMovies={this.props.topMovies}
            user={this.props.user}
          />
        ) : (
          <div />
        )}
      </section>
    );
  }
}
const mapStateToProps = state => ({
  topMovies: state.topMovies,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addTopMovies: movies => dispatch(addTopMovies(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
