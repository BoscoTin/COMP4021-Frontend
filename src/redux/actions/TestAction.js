import { runAPI } from "../../API/Action"

import {
    BEGIN_TEST,
    TEST_SUCCESS,
    TEST_FAIL
} from "../types/TestAction"

export function begin_api_test() {
    return { type: BEGIN_TEST }
}

export function api_run_test() {
    return runAPI(
        '/pokemon',
        'GET',
        test_success,
        test_fail
    )
}

function test_success(payload) {
    return {
        type: TEST_SUCCESS,
        payload
    }
}

function test_fail(payload) {
    return {
        type: TEST_FAIL,
        payload
    }
}