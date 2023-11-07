import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { withStyles, createStyles } from "@mui/styles";
import "./styles.css";

export default function AccordionComp({ name, content }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="Accordian-custom-styles">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{
          border: "0px",
          borderRadius: "0",
          boxShadow: "none",
          borderBottom: "2px solid #E8E8E8",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "#1A2644", fontSize: "30" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ padding: "0" }}
          style={{
            // border:'1px solid red',
            minHeight: "30px",
            // margin:'0'
          }}
        >
          <Typography
            sx={{ flexShrink: 0, color: "#1A2644", fontWeight: "600" }}
          >
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: "0", paddingTop: "0" }}>
          <Typography
            style={{
              whiteSpace: "pre",
              color: "#1a2644",
              lineHeight: "25px",
            }}
          >
            {content}
            {/* item.options.replace(/,/g, "\n") */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
