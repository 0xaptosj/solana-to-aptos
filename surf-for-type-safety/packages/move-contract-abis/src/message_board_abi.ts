export const ABI = {
  address: "0x6fc9d69553673427eaaed0e1a81a97d0de02ecb017958ddd2f90d6f219d8498a",
  name: "message_board",
  friends: [],
  exposed_functions: [
    {
      name: "get_message_content",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0x6fc9d69553673427eaaed0e1a81a97d0de02ecb017958ddd2f90d6f219d8498a::message_board::Message>",
      ],
      return: [
        "0x1::string::String",
        "u64",
        "address",
        "0x1::option::Option<0x1::string::String>",
        "0x1::option::Option<u64>",
        "0x1::option::Option<address>",
      ],
    },
    {
      name: "get_message_struct",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0x6fc9d69553673427eaaed0e1a81a97d0de02ecb017958ddd2f90d6f219d8498a::message_board::Message>",
      ],
      return: [
        "0x6fc9d69553673427eaaed0e1a81a97d0de02ecb017958ddd2f90d6f219d8498a::message_board::Message",
      ],
    },
    {
      name: "get_messages",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["0x1::option::Option<u64>", "0x1::option::Option<u64>"],
      return: [
        "vector<0x1::object::Object<0x6fc9d69553673427eaaed0e1a81a97d0de02ecb017958ddd2f90d6f219d8498a::message_board::Message>>",
      ],
    },
    {
      name: "post_message",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::string::String",
        "u64",
        "address",
        "0x1::option::Option<0x1::string::String>",
        "0x1::option::Option<u64>",
        "0x1::option::Option<address>",
      ],
      return: [],
    },
  ],
  structs: [
    {
      name: "Message",
      is_native: false,
      abilities: ["copy", "key"],
      generic_type_params: [],
      fields: [
        { name: "string_content", type: "0x1::string::String" },
        { name: "number_content", type: "u64" },
        { name: "address_content", type: "address" },
        {
          name: "optional_string_content",
          type: "0x1::option::Option<0x1::string::String>",
        },
        { name: "optional_number_content", type: "0x1::option::Option<u64>" },
        {
          name: "optional_address_content",
          type: "0x1::option::Option<address>",
        },
      ],
    },
    {
      name: "MessageBoard",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "messages",
          type: "vector<0x1::object::Object<0x6fc9d69553673427eaaed0e1a81a97d0de02ecb017958ddd2f90d6f219d8498a::message_board::Message>>",
        },
      ],
    },
  ],
} as const;
