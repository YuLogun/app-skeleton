const defaultNumberFormatter = new Intl.NumberFormat('ru-RU', { style: 'decimal', currency: 'RUB', minimumFractionDigits: 0 });

export type NumberFormatOptions = Intl.NumberFormatOptions & {locale?: string};

/**
 * Приводит число согласно стандартам
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 * @param {number} number
 * @returns {string}
 */
export default function formatNumber(number: number, options: NumberFormatOptions = {}): string {
    if (typeof number !== 'number') {
        console.error('formatNumber принимает только числа');

        return number;
    }

    if (options) {
        const { locale = 'ru-RU', ...restOptions } = options;

        return new Intl.NumberFormat(locale, {
            style: 'decimal',
            currency: 'RUB',
            minimumFractionDigits: 0,
            ...restOptions
        }).format(number);
    }

    return defaultNumberFormatter.format(number);
}