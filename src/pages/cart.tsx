import React from "react";
import { withRouter } from "next/router";
import Page from "@components/abstract/page";

class Cart extends Page {
  render() {
    return super.render(
      <main>
        Корзина пуста
      </main>
    );
  }
}

export default withRouter(Cart);