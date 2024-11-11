import { useTranslation } from 'react-i18next';

export const useBenefitsList = () => {
  const { t } = useTranslation();
  return t('benefits.benefitsList', { returnObjects: true }) as string[];
};
