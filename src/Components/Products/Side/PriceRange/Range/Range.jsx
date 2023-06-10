import { Page , Navbar , ListItem , ListItemContent , BlockTitle , Icon , Range , List   } from "framework7-react";
import React from "react";

export default class RANGE extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        priceMin: 200,
        priceMax: 400,
      }
    }
    render() {
      return (
        <Page>
          <Navbar title="Range Slider"></Navbar>
          <BlockTitle className="display-flex justify-content-space-between">Price Filter <span>${this.state.priceMin} - ${this.state.priceMax}</span></BlockTitle>
          <List simpleList>
            <ListItem>
              <ListItemContent className="width-auto flex-shrink-0">
                <Icon ios="f7:money_dollar_round" aurora="f7:money_dollar_round" md="material:attach_money"></Icon>
              </ListItemContent>
              <ListItemContent className="flex-shrink-3">
                <Range
                  min={0}
                  max={500}
                  step={1}
                  value={[this.state.priceMin, this.state.priceMax]}
                  label={true}
                  dual={true}
                  color="green"
                  onRangeChange={this.onPriceChange.bind(this)}
                ></Range>
              </ListItemContent>
              <ListItemContent className="width-auto flex-shrink-0">
                <Icon ios="f7:money_dollar_round_fill" aurora="f7:money_dollar_round_fill" md="material:monetization_on"></Icon>
              </ListItemContent>
            </ListItem>
          </List>
        </Page>
      )
    }
    onPriceChange(values) {
      this.setState({
        priceMin: values[0],
        priceMax: values[1],
      });
    }
  }