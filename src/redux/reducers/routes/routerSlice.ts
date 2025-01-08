import { routerKey } from "@/constants/routerKeys";
import { createAppSlice } from "../../store/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RouterSliceState {
  currentPage: string
}

const initialState: RouterSliceState = {
  currentPage: routerKey.DASHBOARD
};

export const routerSlice = createAppSlice({
  name: "routes",
  initialState,
  reducers: (create) => ({
    updateRoute: create.reducer((state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    })
  }),

  selectors: {
    routerState: (router) => router
  },
});

export const { updateRoute } = routerSlice.actions;

export const { routerState } = routerSlice.selectors;
