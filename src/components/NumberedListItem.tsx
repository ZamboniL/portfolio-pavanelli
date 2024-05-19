export default function NumberedListItem() {
  return (
    <div
      className="sticky top-20 flex gap-8 p-8 rounded-[20px] backdrop-blur-md z-0 md:top-32
    shadow-[rgba(255,_255,_255,_0.5)_0px_0px_2px_0px_inset] bg-gradient-to-b from-[rgba(15,_15,_15,_0.5)] to-[rgb(29,_0,_66)]"
    >
      <h4 className="text-xl font-semibold">01</h4>
      <div className="flex flex-col gap-5">
        <h4 className="text-xl font-semibold">Logo Conceptualization</h4>
        <p className="font-medium text-white/50 leading-7">
          I have a passion for crafting unique and impactful logos that
          effectively communicate a {"brand's"} identity. With a focus on
          simplicity and memorability, I ensure that each logo I create leaves a
          lasting impression.
        </p>
      </div>
    </div>
  );
}
