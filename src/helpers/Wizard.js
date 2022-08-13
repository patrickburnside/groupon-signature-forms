import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.next = values =>
      this.setState(state => ({
        page: Math.min(state.page + 1, this.props.children.length - 1),
        values
      }));
    this.previous = () =>
      this.setState(state => ({
        page: Math.max(state.page - 1, 0)
      }));

    this.validate = values => {
      const activePage = React.Children.toArray(this.props.children)[
        this.state.page
      ];
      return activePage.props.validate ? activePage.props.validate(values) : {};
    };

    this.handleSubmit = values => {
      const { children, onSubmit } = this.props;
      const { page } = this.state;
      const isLastPage = page === React.Children.count(children) - 1;

      if (isLastPage) {
        return onSubmit(values);
      } else {
        this.next(values);
      }
    };
    this.state = {
      page: 0,
      values: props.initialValues || {}
    };
  }
  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return React.createElement(
      Form,
      {
        initialValues: values,
        validate: this.validate,
        onSubmit: this.handleSubmit
      },
      ({ handleSubmit, submitting, values }) =>
        React.createElement(
          "form",
          { onSubmit: handleSubmit },
          React.createElement(
            "div",
            { className: "buttons" },
            !isLastPage &&
              React.createElement(
                "button",
                {
                  type: "submit",
                  className: "button-primary button-rounded button float-right"
                },
                "Continue"
              ),
            page > 0 &&
              React.createElement(
                "button",
                {
                  type: "button",
                  className: "button-secondary button-rounded button",
                  onClick: this.previous
                },
                "Back"
              ),
            isLastPage &&
              React.createElement(
                "button",
                {
                  type: "submit",
                  className: "button-primary button-rounded button float-right",
                  disabled: submitting
                },
                "Submit"
              )
          ),
          activePage,

          React.createElement("pre", null, JSON.stringify(values, 0, 2))
        )
    );
  }
}
Wizard.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
Wizard.Page = ({ children }) => children;
