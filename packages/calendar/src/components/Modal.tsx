import React, { ChangeEventHandler, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { CalendarEvent } from "../models";
import { Button, DarkButton } from "../ui/Button";
import { CloseButton } from "./CloseButton";
import { Field } from "../ui/Field";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";

const Backdrop = styled.div`
  -webkit-text-size-adjust: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  --bg-opacity: 1;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalStyled = styled.div`
  --bg-opacity: 1;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  max-width: 36rem;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  right: 0;
  left: 0;
`;

const ModalPanel = styled.div`
  --bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--bg-opacity));
  border-radius: 0.5rem;
  display: block;
  overflow: hidden;
  padding: 2rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Heading = styled.h2`
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  --bg-opacity: 1;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  margin: 0;
  border-bottom-width: 1px;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  --text-opacity: 1;
  color: rgba(45, 55, 72, var(--text-opacity));
`;

const ModalFooter = styled.div`
  margin-top: 2rem;
  text-align: right;
`;

type ModalProps = {
  date: Date;
  title?: string;
  closeModal(): void;
  onSave(event: CalendarEvent): void;
};

export const Modal: FC<ModalProps> = ({
  date,
  title,
  onSave,
  closeModal,
}) => {
  const [event, setEvent] = useState<Required<CalendarEvent>>({
    date,
    title: "",
    theme: "tomato",
  });
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setEvent((state) => ({ ...state, [name]: value }));
  };

  const handleSaveClick = () => {
    return () => {
      onSave({ ...event, date: new Date(event.date) });
      setEvent({ date: null as any, title: "", theme: "tomato" });
      closeModal();
    };
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    <>
      <Backdrop>
        <ModalStyled>
          <CloseButton onClick={closeModal} />

          <ModalPanel className="shadow w-full rounded-lg bg-white overflow-hidden w-full block p-8">
            {title && <Heading>{title}</Heading>}

            <Field>
              <Label>Event title</Label>
              <Input
                type="text"
                name="title"
                value={event.title}
                placeholder="Add title"
                onChange={handleChange}
              />
            </Field>

            <Field>
              <Label>Event date</Label>
              <Input
                type="text"
                name="date"
                value={event.date?.toDateString()}
                onChange={handleChange}
              />
            </Field>

            <ModalFooter>
              <Button type="button" onClick={closeModal}>
                Cancel
              </Button>
              <DarkButton type="button" onClick={handleSaveClick()}>
                Save
              </DarkButton>
            </ModalFooter>
          </ModalPanel>
        </ModalStyled>
      </Backdrop>
    </>
  );
};
