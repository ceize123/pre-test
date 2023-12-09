const getInputText = (num) => {
  let inputText = String(num).replace(/[^\d.-]/g, ''); // Remove anything that is not a digit, a minus sign, or a dot

  // Ensure there's only one dot and minus sign
  const firstDotIndex = inputText.indexOf('.');
  const firstMinusIndex = inputText.indexOf('-');

  // Replace subsequent dots and minus signs with an empty string
  inputText = inputText.replace(/\./g, (_, index) =>
    index > firstDotIndex ? '' : '.'
  );
  inputText = inputText.replace(/-/g, (_, index) =>
    index > firstMinusIndex ? '' : '-'
  );
  return inputText;
};

const dotIndex = (inputText) => {
  return inputText.indexOf('.');
};

const getDecimals = (inputText) => {
  const index = dotIndex(inputText);
  if (index !== -1) {
    return inputText.substring(index);
  } else {
    return;
  }
};

const getIntegers = (inputText) => {
  const index = dotIndex(inputText);
  if (index !== -1) {
    return removeLeadingZero(inputText).substring(0, index);
  } else {
    return removeLeadingZero(inputText);
  }
};

const removeLeadingZero = (inputText) => {
  if (inputText.startsWith('0') || inputText.startsWith('-0')) {
    return inputText.replace(/^(-?)0+(?=\d)/, '$1');
  } else {
    return inputText;
  }
};

export const addComma = (str) => {
  const inputText = getInputText(str);
  const integers = getIntegers(inputText);
  const decimals = getDecimals(inputText);
  let formattedIntegerPart;

  if (integers.startsWith('-')) {
    // If the input starts with a minus sign, keep it and format the rest
    formattedIntegerPart =
      '-' + integers.slice(1).replace(/\B(?=(\d{3})+(?!\d)(\.|$))/g, ',');
  } else {
    // If the input does not start with a minus sign, format normally
    formattedIntegerPart = integers.replace(/\B(?=(\d{3})+(?!\d)(\.|$))/g, ',');
  }

  // Combine the formatted integer part with the decimal part
  const result = decimals
    ? `${formattedIntegerPart}${decimals}`
    : formattedIntegerPart;

  return result;
};

const getOverlap = (arrays) => {
  let overlap = [];
  for (let i = 0; i < arrays.length - 1; i++) {
    for (let j = i + 1; j < arrays.length; j++) {
      const [start1, end1] = arrays[i];
      const [start2, end2] = arrays[j];

      const intersectionStart = Math.max(start1, start2);
      const intersectionEnd = Math.min(end1, end2);

      if (intersectionStart <= intersectionEnd) {
        const intersection = [intersectionStart, intersectionEnd];

        // Check if the intersection is not completely contained within an existing one
        if (
          !overlap.some(
            ([s, e]) => s <= intersectionStart && e >= intersectionEnd
          )
        ) {
          overlap.push(intersection);
        }
      }
    }
  }
  return overlap;
};

const getNotIncluded = (arrays) => {
  let notInclude = [];

  let prevEnd = -1;

  for (const [start, end] of arrays) {
    if (start !== 0 && start > prevEnd) {
      // There is a gap between the current interval and the previous one
      notInclude.push([prevEnd + 1, start - 1]);
    }

    prevEnd = Math.max(prevEnd, end);
  }

  // If previous end is not equals to 20, push all the left numbers into the array
  if (prevEnd !== 20) {
    notInclude.push([prevEnd + 1, 20]);
  }
  return notInclude;
};

export const getNumberIntervals = (intervals) => {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const overlap = getOverlap(sortedIntervals);
  const notInclude = getNotIncluded(sortedIntervals);

  return { overlap, notInclude };
};
