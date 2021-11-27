import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import ordinal from "./ordinalSuffix.ts";

Deno.test("0", () => {
  assertEquals(ordinal(0), "0th");
});

Deno.test("1", () => {
  assertEquals(ordinal(1), "1st");
});

Deno.test("2", () => {
  assertEquals(ordinal(2), "2nd");
});

Deno.test("3", () => {
  assertEquals(ordinal(3), "3rd");
});

Deno.test("4", () => {
  assertEquals(ordinal(4), "4th");
});

Deno.test("5", () => {
  assertEquals(ordinal(5), "5th");
});

Deno.test("10", () => {
  assertEquals(ordinal(10), "10th");
});

Deno.test("100", () => {
  assertEquals(ordinal(100), "100th");
});
