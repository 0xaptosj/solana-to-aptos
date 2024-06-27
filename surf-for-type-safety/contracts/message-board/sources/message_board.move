module message_board_addr::message_board {
    use std::option::{Self, Option};
    use std::vector;
    use std::string::String;

    use aptos_std::math64;

    use aptos_framework::object::{Self, Object};

    const DEFAULT_START_AFTER: u64 = 0;
    const DEFAULT_LIMIT: u64 = 10;

    struct Message has key, copy {
        string_content: String,
        number_content: u64,
        address_content: address,
        optional_string_content: Option<String>,
        optional_number_content: Option<u64>,
        optional_address_content: Option<address>,
    }

    struct MessageBoard has key {
        messages: vector<Object<Message>>,
    }

    // This function is only called once when the module is published for the first time.
    // init_module is optional, you can also have an entry function as the initializer.
    fun init_module(sender: &signer) {
        move_to(
            sender,
            MessageBoard {
                messages: vector::empty(),
            },
        )
    }

    // ======================== Write functions ========================

    public entry fun post_message(
        _sender: &signer,
        string_content: String,
        number_content: u64,
        address_content: address,
        optional_string_content: Option<String>,
        optional_number_content: Option<u64>,
        optional_address_content: Option<address>,
    ) acquires MessageBoard {
        let message_obj_constructor_ref = &object::create_object(@message_board_addr);
        move_to(&object::generate_signer(message_obj_constructor_ref), Message {
            string_content,
            number_content,
            address_content,
            optional_string_content,
            optional_number_content,
            optional_address_content,
        });
        let message_board = borrow_global_mut<MessageBoard>(@message_board_addr);
        vector::push_back(
            &mut message_board.messages,
            object::object_from_constructor_ref(message_obj_constructor_ref)
        );
    }

    // ======================== Read Functions ========================

    #[view]
    public fun get_messages(
        start_after: Option<u64>,
        limit: Option<u64>
    ): vector<Object<Message>> acquires MessageBoard {
        let messages = borrow_global<MessageBoard>(@message_board_addr).messages;
        let results = vector[];
        let start_idx = if (option::is_some(&start_after)) {
            *option::borrow(&start_after) + 1
        } else {
            DEFAULT_START_AFTER
        };
        let end_idx = math64::min(
            vector::length(&messages),
            start_idx + *option::borrow_with_default(&limit, &DEFAULT_LIMIT)
        );
        for (i in start_idx..end_idx) {
            let message_obj = *vector::borrow(&messages, i);
            vector::push_back(&mut results, message_obj);
        };
        results
    }

    #[view]
    public fun get_message_content(message_obj: Object<Message>): (
        String,
        u64,
        address,
        Option<String>,
        Option<u64>,
        Option<address>,
    ) acquires Message {
        let message = borrow_global<Message>(object::object_address(&message_obj));
        (
            message.string_content,
            message.number_content,
            message.address_content,
            message.optional_string_content,
            message.optional_number_content,
            message.optional_address_content,
        )
    }

    #[view]
    public fun get_message_struct(message_obj: Object<Message>): Message acquires Message {
        let message = borrow_global<Message>(object::object_address(&message_obj));
        *message
    }
}
