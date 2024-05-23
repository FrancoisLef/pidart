export const formatText = (text: string) =>
  text.split('**').map((subText, idx) =>
    // If the string contains '**' tags, the split should make all
    // the bold ones end up on odd positions.
    // Ex: '0 **1** 0 **1** 0' => [0, 1, 0, 1, 0]
    idx % 2 === 1 ? (
      <strong key={`${idx}-${subText}`}>{subText}</strong>
    ) : (
      subText
    ),
  );
