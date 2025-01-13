import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../components/services/authConfig";

interface CpuAggregate {
  high: number;
  low: number;
  medium: number;
}

interface MemoryAggregate {
  high: number;
  low: number;
  medium: number;
}

interface MainListItem {
  id: string;
  server_ip: string;
  server_os: string;
  timestamp: string;
}

export interface InfraData {
  active_list: string[];
  inactive_list: string[];
  linux_count: number;
  windows_count: number;
  other_count: number;
  cpu_aggregate: CpuAggregate;
  memory_aggregate: MemoryAggregate;
  main_list: MainListItem[];
}

export const fetchInfraSummary = createAsyncThunk("infraSummary", async () => {
  const response = await axios.get("/infra_summary_overview");
  return response.data;
});

const InfraSummarySlice = createSlice({
  name: "infraSummary",
  initialState: {
    isLoading: false,
    isError: false,
    data: null as InfraData | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInfraSummary.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchInfraSummary.fulfilled, (state, action) => {
      // console.log(action.payload);

      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchInfraSummary.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default InfraSummarySlice.reducer;
