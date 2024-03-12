
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import { vi } from "vitest";
import  AddVolunteer from "../src/Components/AddVolunteer";

function createFetchResponse(data: any) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

test('should dispay error msg upon successful add', async () => {
  const apiResp = {
    name : "name",
    age : 1,
    occupation: "occupation",
    email: "email",
    about: "about",
  }
  global.fetch = vi.fn().mockResolvedValueOnce(createFetchResponse(apiResp))
  render(<AddVolunteer />);
  await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))
// Assert
  const element = await screen.findByText(/Your profile was sucessfully added!/i);
  expect(element).toBeInTheDocument();
})