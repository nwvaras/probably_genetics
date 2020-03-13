import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import { useMutate } from "restful-react";
import Switch from "@material-ui/core/Switch";
import { Cell, Legend, Pie, PieChart } from "recharts";

const useStyle = makeStyles({
  textField: {},
  wrapper: {
    position: "relative"
  },
  button: {
    padding: "14px 27px"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

const useSymtomQueryMutate = ({ ml }) => {
  return useMutate("POST", ml ? "/query-ml" : "/query", {});
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

export default function PredictDiseaseView(props) {
  const classes = useStyle();

  const [state, setState] = useState({
    query: "",
    data: null,
    checked: false
  });

  const { query, data, checked } = state;
  const { loading, mutate } = useSymtomQueryMutate({ ml: checked });

  const onChange = e => {
    setState({ ...state, query: e.target.value });
  };

  const onSubmit = () => {
    mutate({ query })
      .then(({ terms, results }) => {
        setState({ ...state, data: { terms, results } });
      })
      .catch(() => setState({ ...state, data: null }));
  };
  const handleSwitch = event => {
    setState({ ...state, checked: event.target.checked, data: null });
  };
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const canSubmit = query.trim().length > 0;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Have any symptoms? It's probably genetic!</h1>
        </Grid>
        <Grid item xs={12}>
          <div>
            Overlapping
            <Switch
              checked={checked}
              onChange={handleSwitch}
              value="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Classifier
          </div>
        </Grid>
        <Grid item xs={12} sm>
          <TextField
            className={classes.textField}
            fullWidth
            variant={"outlined"}
            label={"Consult for symptoms"}
            placeholder={"When I was a child, I had a fever"}
            value={query}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <div className={classes.wrapper}>
            <Button
              fullWidth
              className={classes.button}
              variant={"outlined"}
              color={"primary"}
              size={"large"}
              disabled={!canSubmit || loading}
              onClick={onSubmit}
            >
              Consult
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </Grid>
      </Grid>
      {data && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {data.terms.length > 0 && (
              <p>
                <small>
                  Looking for these terms:{" "}
                  {data.terms.map((term, i) => (
                    <>
                      {i === 0 ? "" : ", "}
                      <i>
                        <strong>{term}</strong>
                      </i>
                    </>
                  ))}
                </small>
              </p>
            )}
            {data.terms.length === 0 && (
              <p>No disorders found for the specified query.</p>
            )}
          </Grid>
          <Grid item xs={12}>
            {data.results.length > 0 && (
              <>
                <h4>Here are the disorders we found!</h4>
                {checked && (
                  <PieChart width={300} height={400}>
                    <Legend />
                    <Pie
                      data={data.results.map(d => ({
                        ...d,
                        value: Math.round(d.value * 100) / 100
                      }))}
                      cx={"50%"}
                      cy={"50%"}
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      label
                    >
                      {data.results.map((entry, index) => (
                        <Cell fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                )}
                {!checked && (
                  <p>
                    {data.results.map(disorder => (
                      <>
                        {disorder.name}
                        <br />
                      </>
                    ))}
                  </p>
                )}
              </>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
}
