import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Container, Wrapper, Section } from './styles';
import Icon from '../../components/Icon';
import Nav from '../../components/Nav';
import T from '../../components/T';
import { RegularSwitch } from '../../components/Switch';

const Preferences = () => {
  return (
    <Wrapper>
      <Container>
        <Nav title="Preferências">
          <Icon iconPack={AntDesign} name="arrowleft" />
        </Nav>
        <Section>
          <T bold size={18}>
            Comunicação Plutus
          </T>
          <T color="#333">
            Escolha os canais que gostaria de receber comunicação para nunca
            mais esquecer de pagar uma fatura!{' '}
          </T>
          <RegularSwitch label="Notificação" />
          <RegularSwitch label="SMS" />
          <RegularSwitch label="E-mail" />
        </Section>
        <Section>
          <T bold size={18}>
            Sincronizar calendário
          </T>
          <RegularSwitch label="Google Calendar™" />
          <RegularSwitch label="Outlook® Calendar" />
          <RegularSwitch label="iCal®" />
        </Section>
        <Section>
          <T bold size={18}>
            Segurança
          </T>
          <RegularSwitch label="Solicitar senha de desbloqueio do aparelho para logar no aplicativo " />
        </Section>
        <Section>
          <T bold size={18}>
            Permissões de Open Banking
          </T>
          <RegularSwitch label="Acessar Saldo" />
          <RegularSwitch label="Acessar extrato" />
          <RegularSwitch label="Pagar boletos" />
          <RegularSwitch label="Acessar fatura dos cartões" />
          <RegularSwitch label="Permitir débito automático" />
        </Section>
      </Container>
    </Wrapper>
  );
};

export default Preferences;
