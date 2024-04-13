import { Modal } from "./modal.js";

const modalToggle = document.getElementById("wallet-btn");

const walletModal = document.getElementById("wallet-modal");

const closeWalletModal = document.getElementById("wallet-close");

const modal = new Modal(modalToggle, walletModal, closeWalletModal);
