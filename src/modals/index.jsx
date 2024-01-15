import { useModal } from "~/store/modal/hooks";
import modals from "~/routes/modals";
import { Fragment, useRef } from "react";
import { useClickAway, useKeyPressEvent } from "react-use";
import { Dialog, Transition } from "@headlessui/react";
import ModalHeader from "~/modals/components/header";
import { closeModal } from "~/store/modal/actions";

export default function Modal() {
  const ref = useRef(null);
  const { modal, data, isOpen } = useModal();
  const currentModal = modals.find((m) => m.name === modal);

  useClickAway(ref, closeModal);
  useKeyPressEvent("Escape", closeModal);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 z-10 bg-white/10 backdrop-blur w-full h-full flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              ref={ref}
              className="max-w-[400px] w-full bg-zinc-900 text-white rounded-lg"
            >
              <div className="w-full h-full p-6">
                <ModalHeader title={currentModal.title} close={closeModal} />
                {currentModal && <currentModal.element data={data} />}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
