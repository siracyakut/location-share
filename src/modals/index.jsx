import { useModal } from "~/store/modal/hooks";
import modals from "~/routes/modals";

export default function Modal() {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name === modal);

  return (
    <div className="fixed inset-0 z-10 bg-white/10 backdrop-blur w-full h-full flex items-center justify-center">
      <div className="max-w-[400px] w-full bg-zinc-900 text-white rounded-lg">
        {currentModal && <currentModal.element />}
      </div>
    </div>
  );
}
