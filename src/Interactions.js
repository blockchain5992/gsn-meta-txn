import { React, useState } from "react";
import styles from "./Wallet.module.css";
import { Button, Form, input } from "reactstrap";

const Interactions = (props) => {
  const [transferHash, setTransferHash] = useState();

  const transferHandler = async (e) => {
    e.preventDefault();
    let transferAmount = e.target.sendAmount.value;
    let recieverAddress = e.target.recieverAddress.value;

    let txt = await props.contract.transfer(recieverAddress, transferAmount);
    console.log(txt);
    setTransferHash("Transfer confirmation hash: " + txt.hash);
  };

  const mintToken = async (e) => {
    e.preventDefault();
    let mintAmount = e.target.amount.value;
    let recieverAddress = e.target.recieverAddress.value;

    let txt = await props.contract.mintToken(recieverAddress, mintAmount);
    console.log(txt);
    setTransferHash("Transfer confirmation hash: " + txt.hash);
  };

  return (
    <div className={styles.interactionsCard}>
      <Form onSubmit={transferHandler}>
        <h3> Transfer Coins </h3>
        <p> Reciever Address </p>
        <input
          type="text"
          id="recieverAddress"
          className={styles.addressInput}
        />

        <p> Send Amount </p>
        <input type="number" id="sendAmount" min="0" step="1" />

        <Button
          type="submit"
          color="primary"
          className={styles.button6}
        >
          Send
        </Button>
        <div>{transferHash}</div>
      </Form>
      <h4>Mint Token for user</h4>
      <Form onSubmit={mintToken}>
        <h3> Mint Token </h3>

        <p> Reciever Address </p>
        <input
          type="text"
          id="recieverAddress"
          className={styles.addressInput}
        />

        <p> Amount </p>
        <input type="number" id="amount" min="0" step="1" />

        <Button
          type="submit"
          color="primary"
          className={styles.button6}
        >
          Mint
        </Button>
        <div>{transferHash}</div>
      </Form>
    </div>
  );
};

export default Interactions;
