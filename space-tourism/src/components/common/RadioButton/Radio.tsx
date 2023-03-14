import { Box, useRadio } from "@chakra-ui/react";

const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  console.log(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input
        value={props.value}
        onChange={props.onChange}
        checked={props.crew === props.value}
        {...input}
      />
      <Box
        {...checkbox}
        cursor="pointer"
        w="10px"
        h="10px"
        borderWidth="1px"
        borderRadius="100px"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
      >
        {/* {props.children} */}
      </Box>
    </Box>
  );
};
export default RadioCard;
