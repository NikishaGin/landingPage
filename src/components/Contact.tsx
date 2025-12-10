import React, { useState } from 'react';
import styled from 'styled-components';
import { Mail, MapPin, Phone, Send, Upload, X } from 'lucide-react';
import { Section, Container, SectionTitle, Grid2, Card, Button, InputGroup, Label, Input, Textarea } from '../styles/SharedComponents';
import maps2 from '../images/maps2.png';

const ContactCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;

  &:hover {
    background: white;
    box-shadow: var(--shadow-sm);
    transform: translateX(4px);
  }

  svg {
    width: 22px;
    height: 22px;
    color: var(--color-primary);
    flex-shrink: 0;
    margin-top: 0.125rem;
  }
`;

const InfoText = styled.div`
  flex: 1;

  h4 {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.75rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const MapImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-top: 0.5rem;
  box-shadow: var(--shadow-sm);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${InputGroup} {
    margin-bottom: 1.25rem;

    &:last-of-type {
      margin-bottom: 1.5rem;
    }
  }
`;

const FileLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: white;
  border: 2px dashed var(--bg-secondary);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-primary);
    background: var(--bg-tertiary);
    color: var(--color-primary);
  }

  input {
    display: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const FilePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  margin-top: 0.75rem;

  span {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  button {
    background: none;
    border: none;
    padding: 0.25rem;
    cursor: pointer;
    color: var(--text-muted);
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const SubmitButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: auto;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Contact = () => {
  const [fio, setFio] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else if (file) {
      alert('Пожалуйста, загрузите файл в формате PDF');
      e.target.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fio', fio);
    formData.append('phone', phone);
    formData.append('message', message);
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const response = await fetch('http://10.252.63.18:3025/send-form', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Форма успешно отправлена!');
        setFio('');
        setPhone('');
        setMessage('');
        setSelectedFile(null);
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  return (
    <Section bgColor="linear-gradient(135deg, #FFF5F5 0%, #F7F9FC 50%, #E8F5F2 100%)" id="Контакты">
      <Container>
        <SectionTitle>
          Свяжитесь с <span>нами</span>
        </SectionTitle>

        <Grid2 gap="2rem">
          <ContactCard>
            <CardHeader>Контактная информация</CardHeader>

            <ContactInfo>
              <InfoItem>
                <MapPin />
                <InfoText>
                  <h4>Адрес</h4>
                  <p>Москва, ул. Долгоруковская, д. 36, стр. 1</p>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <Phone />
                <InfoText>
                  <h4>Телефон</h4>
                  <p>+7 (495) 198-53-15</p>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <Mail />
                <InfoText>
                  <h4>Сайт</h4>
                  <p>www.nalog.gov.ru</p>
                </InfoText>
              </InfoItem>

              <MapImage src={maps2} alt="Карта проезда" />
            </ContactInfo>
          </ContactCard>

          <ContactCard>
            <CardHeader>Отправить резюме</CardHeader>

            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Label>Имя</Label>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={fio}
                  onChange={(e) => setFio(e.target.value)}
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>Телефон</Label>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>Сообщение</Label>
                <Textarea
                  placeholder="Расскажите о себе..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>Резюме (PDF)</Label>
                <FileLabel>
                  <Upload />
                  <span>Загрузить файл</span>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />
                </FileLabel>
                {selectedFile && (
                  <FilePreview>
                    <span>{selectedFile.name}</span>
                    <button type="button" onClick={() => setSelectedFile(null)}>
                      <X />
                    </button>
                  </FilePreview>
                )}
              </InputGroup>

              <SubmitButton type="submit" variant="primary">
                <Send />
                Отправить
              </SubmitButton>
            </Form>
          </ContactCard>
        </Grid2>
      </Container>
    </Section>
  );
};
