package com.techvg.temple.domain.enumeration;

/**
 * The Gender enumeration.
 */
public enum Gender {
    MALE("Male"),
    FEMALE,
    OTHER("Other");

    private String value;

    Gender() {}

    Gender(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
